import "./Header.css"
function Header(){
    return(<div className="top-nav">
    <div className="h-left">
    <h1>ShopKart</h1>
    </div>
    <div className="h-right">
    <p>products</p>
    <p>Login</p>
    <select> 
    <option value="" selected="selected">Select</option> 
    
    <option value="/">Products</option> 
    <option value="/collections/all">Login</option> 
    <option value="/blogs/five-simple-steps-blog">Favorites</option>
    </select> 
    </div>
    
    </div>)
}
export default Header;