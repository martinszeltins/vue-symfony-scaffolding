import Toastify from 'toastify-js'
import imgError from '@img/error.png'
import imgCheck from '@img/check.png'

export function useToast() {
    const defaultToastOptions = {
        gravity: 'top',
        close: true,
        position: 'center',
        style: {
            background: '#fff',
            color: '#000',
        },
        stopOnFocus: true,
        offset: {
            y: 10,
        },
        duration: 3000,
    }

    const showErrorToast = text => {
        Toastify({
            ...defaultToastOptions,
            text: text,
            className: 'toast-error',
            avatar: imgError,
        }).showToast()
    }

    const showSuccessToast = text => {
        Toastify({
            ...defaultToastOptions,
            text: text,
            className: 'toast-error',
            avatar: imgCheck,
        }).showToast()
    }

    return { showErrorToast, showSuccessToast }
}
