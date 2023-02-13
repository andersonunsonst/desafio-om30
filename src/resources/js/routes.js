const Welcome = () => import('./components/Welcome.vue' /* webpackChunkName: "resource/js/components/welcome" */)
const PacientesList = () => import('./components/pacientes/List.vue' /* webpackChunkName: "resource/js/components/pacientes/list" */)
const PacientesCreate = () => import('./components/pacientes/Add.vue' /* webpackChunkName: "resource/js/components/pacientes/add" */)
const PacientesEdit = () => import('./components/pacientes/Edit.vue' /* webpackChunkName: "resource/js/components/pacientes/edit" */)

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Welcome
    },
    {
        name: 'pacientesList',
        path: '/pacientes',
        component: pacientesList
    },
    {
        name: 'pacientesEdit',
        path: '/pacientes/:id/edit',
        component: pacientesEdit
    },
    {
        name: 'pacientesAdd',
        path: '/pacientes/add',
        component: pacientesCreate
    }
]