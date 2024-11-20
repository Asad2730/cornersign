

interface IOrderNav {
  create: string
  detail: string
}


interface ISettingsNav {
  PersonalInformation: string
  UpdatePassword: string
  Payment: string
}

const orders: IOrderNav = {
  create: '/pages/main/order/upsert',
  detail: '/pages/main/order/detail'
}


const settings: ISettingsNav = {
  PersonalInformation: '/pages/main/settings/personalInfo',
  UpdatePassword: '/pages/main/settings/updatepassword',
  Payment: '/pages/main/settings/payment'
}

export const dashboard_navigation = {
  Home: { href: "/pages/main/home", icon: "/dashboard-4-svgrepo-com.svg" },
  Orders: { href: "/pages/main/order", icon: "/Group 52855.svg", subRoutes: orders },
  Chat: { href: "/pages/main/chat", icon: "/chat-round-dots-svgrepo-com.svg" },
  Settings: { href: settings.PersonalInformation, icon: "/Group 54114.svg" ,subRoutes:settings},
};
