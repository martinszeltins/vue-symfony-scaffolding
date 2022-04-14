<template>
    <aside class="px-8 z-10 w-72 overflow-y-auto bg-white flex-shrink-0 shadow">
        <div class="py-4 text-gray-400">
            <div class="mt-2">
                <SidebarProfile />
            </div>

            <ul class="mt-4">
                <SidebarItem text="Dashboard" icon="home" link="/" :active="true" />
                <SidebarItem text="Sessions" icon="book" link="/" :active="false" />
                <SidebarItem text="Users" icon="users" link="/" :active="false" />
                <SidebarItem text="Groups" icon="user-plus" link="/" :active="false" />
            </ul>
        </div>
    </aside>
</template>