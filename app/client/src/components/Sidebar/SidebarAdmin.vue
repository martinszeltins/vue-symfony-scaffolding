<template>
    <aside class="px-8 z-10 w-72 overflow-y-auto bg-white flex-shrink-0 shadow">
        <div class="py-4 text-gray-400">
            <div class="mt-2">
                <SidebarProfile />
            </div>

            <ul class="mt-4">
                <SidebarItem text="Dashboard" icon="home" route="admin-dashboard" />
                <SidebarItem text="Sessions" icon="book" route="admin-sessions" />
                <SidebarItem text="Users" icon="users" route="admin-sessions" />
                <SidebarItem text="Groups" icon="user-plus" route="admin-sessions" />
            </ul>
        </div>
    </aside>
</template>