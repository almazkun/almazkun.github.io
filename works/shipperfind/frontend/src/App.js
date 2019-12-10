import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    todos: []
  };
  
  componentDidMount() {
    this.getTodos();
  }
  
  getTodos() {
    axios
      .get('https://shipperfind.herokuapp.com/api/v1/?keywords=iphone+11+pro+max')
      .then(res => {
        this.setState({ todos: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (

      <div class="row h-75 justify-content-center align-items-center">
        <div class="col-12">
          <h1 class="display-4 my-4">Hello there!</h1>
          <p class="lead">Welcome to the "find it on eBay" web page. Enter the name of the thing you want to find here:</p>
          <form method="GET" class="input-group mb-3">

            <input type="text" class="form-control" placeholder="iPhone 11 Pro Max" name="keywords"></input>
            <button class="btn btn-danger mx-1 px-4">Find!</button>
          </form>
          <p>Or, you can try our <a href="api/v1/?&amp;keywords=iphone+11">API</a></p>
        </div>

        <div class="col-12">
          {this.state.todos.map(item => (

            <div key={item.id} class="card mb-3">
              <div class="row p-4">
                <div class="col-4">
                  <img class="card-img bg-light" src="{item.pic_url}" alt="Some alt"></img>
                </div>
                <div class="col-8">
                  <div class="card-body">
                    <h5 class="card-title">{item.title}</h5>
                    <hr class="bg-light"></hr>
                    <div class="row">
                      <div class="col-8">
                        <p class="text-muted">Цена: &mdash; <span class="font-weight-bold">US ${item.price}</span></p>
                        <p class="text-muted">Состояние: &mdash; <span class="font-weight-bold">{item.condition}</span></p>
                        <p class="text-muted">Доставка: &mdash; <span class="font-weight-bold">FREE</span></p>
                      </div>
                      <div class="col-4">
                        <img class="card-img" src="https://static.ebayinc.com/static/theme/images/logo.svg?v=1570665245" alt="eBay"></img>
                      </div>
                    </div>
                    <div class="d-flex justify-content-end">
                      <a href="{item.ebay_url}" target="_blank"><button class="btn btn-danger btn-lg mx-1 px-4">Купить сейчас</button></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>



    );
  }
}
export default App;