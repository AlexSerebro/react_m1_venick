import style from './HeaderNavItem.module.css'

export const HeaderNavItem = ({label, link}) => {
  return (
    <li className={style.listItem}><a href={link}>{label}</a></li>
  )
}