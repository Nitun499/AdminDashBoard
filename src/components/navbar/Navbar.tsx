import './Navbar.scss'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src="/logo.svg" alt="" />
        <span>Nitun Dashboard</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt=""  className='icon'/>
        <img src="/app.svg" alt="" className='icon' />
        <img src="/expand.svg" alt="" className='icon'/>
        <div className="notifications">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?size=626&ext=jpg&uid=R31040619&ga=GA1.2.112399232.1688320189&semt=sph" alt="" />
          <span>Nitun</span>
        </div>
        <img src="/setting.svg" alt="" className='icon' />
      </div>
    </div>
  )
}

export default Navbar
