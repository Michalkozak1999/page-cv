
import React, { Component } from 'react';
import '../style/App.css';
import { BrowserRouter } from "react-router-dom"
import Navigation from './Navigation';
import Pageall from './Page';
import Header from './Heder';
import Footer from './Footer';

class App extends Component {
  state = {
    isActive: true
  }


handlerCliick = () => {
  this.setState({
    isActive: !this.state.isActive
  })
}

  render() {
    return (

      <BrowserRouter>
        <div className="App">
          <header>
            <Header isActive2={this.handlerCliick} />
          </header>
          <main>
            <aside>
               <Navigation isActive={this.state.isActive}/>
            </aside>


            <section className="usepage">
             
              <Pageall />
            </section>
          </main>

          <footer>
            <Footer/>
          </footer>

        </div>
      </BrowserRouter>
    );
  }

}

export default App;
