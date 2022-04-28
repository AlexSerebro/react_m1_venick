import style from './HeaderNav.module.css'
import { HeaderNavItem } from './HeaderNavItem'

const NAV_ITEMS = [{
  label: 'PLANTS CATALOG',
  link: '',
},
{
  label: 'About Platform',
  link: '',
  },
{
  label: 'FAQ',
  link: '',
  },
{
  label: 'Blog',
  link: '',
}]

export const HeaderNav = () => {
  return (
  <nav>
    <ul className={style.list}>
        {NAV_ITEMS.map(({ label, link }) =>
          <HeaderNavItem label={label} link={ link}/>)}
    </ul>
  </nav>)
}