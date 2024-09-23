import { getAll } from "./baseService";

/**
 * 
 * @param role optional, default "role" so it will get data of all the users.
 * @returns maping from user-id to user-name, where user.role equals to `role`.
 */
export const usersNames = async (role='role') => {
    const names = await getAll(`users/names/${role}`)
    return names?.data || {} 
}

