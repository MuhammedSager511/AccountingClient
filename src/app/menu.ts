export class MenuModel{
    name: string = "";
    icon: string = "";
    url: string = "";
    isTitle: boolean = false;
    subMenus: MenuModel[] = [];
}

export const Menus: MenuModel[] = [
    {
        name: "Home",
        icon: "fa-solid fa-home",
        url: "/",
        isTitle: false,
        subMenus: []
    },
    {
        name:"Admin",
        icon: "",
        url: "",
        isTitle: true,
        subMenus: []
    },
    {
        name:"Users",
        icon: "fa-solid fa-users",
        url: "/users",
        isTitle: false,
        subMenus: []
    },
    {
        name: "Companies",
        icon: "fa-solid fa-city",
        url: "/companies",
        isTitle: false,
        subMenus:[],
    
    }
    // {
    //     name: "Examples",
    //     icon: "fa-solid fa-explosion",
    //     url: "/examples",
    //     isTitle: false,
    //     subMenus: []
    // }
]