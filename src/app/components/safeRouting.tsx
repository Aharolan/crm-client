'use client'

import { ReactNode} from "react";

const SafeRouting = ({children, role}:{ children:ReactNode, role?:string }) => {
    const UserRol = sessionStorage?.getItem('user_role') || ''
    if (UserRol === '' || (role && UserRol !== role)) {
        location.pathname = '/'
    } return children
}

export default SafeRouting