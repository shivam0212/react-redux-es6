<<-------------------------COMMENTS----------------------->

1. activeClassName, activeStyle and exact props works with <NavLink> and not with <Link>.

2. Place to do data transformation is mapStateToProps function.

3. The router component must only be given one child element.
    // yes
    <BrowserRouter>
      <div>
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </div>
    </BrowserRouter>

    // no
    <BrowserRouter>
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
    </BrowserRouter>

4. Javascript's filter function will always return an array, even for one element.     
