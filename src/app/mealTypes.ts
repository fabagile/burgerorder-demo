export type Menu = {
    id: number,
    meal: string,
    description: string,
price: number,
image: string,
category: number,

}

export type Category = {
    id: number,
    label: string, isActive?: boolean
}

