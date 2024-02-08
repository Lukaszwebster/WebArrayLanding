export interface MenuItem {
  name: string
  icon: string
}

export interface MenuItems {
  title: string
  description?: string
  items: MenuItem[]
}
