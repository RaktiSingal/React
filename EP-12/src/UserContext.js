import { createContext } from "react";

const UserContext = createContext({
    name: 'Rakti',
    age: '24',
    gender: 'Female'
});

export default UserContext;
