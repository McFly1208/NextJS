
import Image from 'next/image'
import {IoBrowsersOutline, IoCalculator, IoFootball, IoLogoReact} from 'react-icons/io5'
import { SidebarMenuItem } from './SidebarMenuItem'

const menuItems = [
  {
    path : '/dashboard/main',
    icon : <IoBrowsersOutline className="text-blue-500 mr-2 "  size={50} />,
    title : 'Dashboard',
    description : 'Visualizacion'
  },
  { path: '/dashboard/counter',
  icon : <IoCalculator className="text-blue-500 mr-2 "  size={50} />,
  title : 'Counter',
  description : 'Estado local'},

  { path: '/dashboard/pokemons',
  icon : <IoFootball className="text-blue-500 mr-2 "  size={50} />,
  title : 'Pokemons',
  description : 'Generacion Estaticos'},                

]
export const Sidebar = () => {
  return (
    <div id="menu" className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64  left-0  overflow-y-scroll" style={{width:'400px'}}>

    <div id="logo" className="my-4 px-6">
      <h1 className="flex text-lg md:text-2xl font-bold text-white items-center">
      <IoLogoReact className="text-blue-500 mr-2 "  size={50} />Dash
      <span className="text-blue-500">8</span>.
      </h1>
     
      <p className="text-slate-500 text-sm">Manage your actions and activities</p>
    </div>

    <div id="profile" className="px-6 py-10">
      <p className="text-slate-500">Hello there!!!</p>
      <a href="#" className="inline-flex space-x-2 items-center">
        <span>
          <Image className="rounded-full w-8 h-8" width={50} height={50} src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80" alt="Hola" />
        </span>
        <span className="text-sm md:text-base font-bold">
         McFly
        </span>
      </a>

    </div>
    <div id="nav" className="w-full px-6">

     {
      menuItems.map( item => (
        <SidebarMenuItem key={item.path} {...item} />
      ))
     }


     
     
     

    </div>
  </div>
  )
}
