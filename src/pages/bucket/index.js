import React, { Component } from 'react';
import { connect } from 'react-redux';
import  '../../styles/Main.css';
import Item from '../Item';
import {Link} from 'react-router-dom';
import { getItems } from './actions';

class Bucket extends Component {

    onClick (t) {
        this.props.addToBucket(t, +this.refs[t].value);
    }

    render() {
        let state = '';
        let totalPrice = 0;

        if(!this.props.bucket || this.props.bucket.length<1)
            state = 'Bucket is empty';
        else
            if(!this.props.items  || !this.props.user || !this.props.items.length) {
                this.props.getBucketItems(this.props.bucket);
                state = 'Bucket is loading';
            }
            else {
                let items = [];
                this.props.items.map(item=> items[item.id]=1);
                if(Object.keys(items).join() !== Object.keys(this.props.bucket).join()) {
                    this.props.getBucketItems(this.props.bucket);
                    state = 'Bucket is loading';
                }
                let bucket = [];
                this.props.bucket.map((item, index) =>{
                    bucket[index] = this.props.items.find(it => it.id === index);
                    totalPrice += item * bucket[index].price;
                    return true;
                });
            }

        

        return (
            <div>
                {
                    state ?
                        state :
                        <div>
                            <h2>
                                Bucket:
                            </h2>
                            <div>
                                Total Price = {totalPrice} $
                            </div>
                            <br/>
                            {
                                this.props.user.id ?
                                    <div>
                                        <Link to={'/order'}>
                                            <button>make order</button>
                                        </Link>
                                        <br/>
                                    </div>
                                    : <div>
                                    to make order you need login
                                    <br/>
                                    </div>
                            }
                            {
                                this.props.bucket.map((item, index) =>
                                    <div key={index}>
                                        <hr/>
                                        <Item
                                            item={this.props.items.find(it => it.id === index)}
                                        />
                                        <label>
                                            Count {item}
                                        </label>
                                        <br/>
                                        <input ref={index}/>
                                        <label> Del from </label>
                                        <img
                                            alt={'bucket'}
                                            onClick={()=>this.onClick(index)}
                                            className={'ico'}
                                            src={process.env.REACT_APP_IMAGE_HOST + 'bucket.ico'}
                                        />
                                    </div>
                                )
                            }
                        </div>
                }
            </div>
            
        );
    }
}

export default connect(
    state => ({
        user: state.process.user,
        items: state.process.items,
        bucket: state.process.bucket
    }),
    dispatch => ({
        addToBucket(id, count) {
            dispatch({type: 'ADD_TO_BUCKET', id, count: -count});
        },
        getBucketItems: (bucket)=> {
            dispatch(getItems(bucket));
        }
    })
)(Bucket);
