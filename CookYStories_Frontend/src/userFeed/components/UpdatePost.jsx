import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import {Mutation} from 'react-apollo'
import { UPDATE_POST} from '../../backend/FeedApis'
import '../css/UpdatePost.css'

class UpdatePost extends Component {
    constructor(props) {
        super(props)
        // this.handleChange = this.handleChange.bind(this);
        
        this.state = {
            // input: "",
            // imgUrl: "",
           
            description: props.description,
            byUsername : props.byUsername,
            post_id: props.post_id,
            dataReceived:false
        };
        
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
      }
    
    //   onDataUpdate = (param) => {
    //     this.props.onFieldChange(param)
    //   }

    render() {
        console.log(this.state)

        let showHideClassName = this.props.show ? 'modal d-block' : 'modal d-none';
        return (
            <Mutation mutation={UPDATE_POST} variables={{id:this.state.post_id, description:this.state.description, byUsername:this.state.byUsername}} >
                {
                    (updatePostClicked, {loading, error, data}) => {
                        
                        if(loading) {
                            return(
                            <span>Loading ... </span>
                            )}
                        if(error) {
                            return(
                            <span>Error ... </span> 
                        )}
                        if (data && this.props.dataReceived) {
                            this.setState({dataReceived:true})
                            console.log(data)
                            const fields = data
                            // this.onDataUpdate(fields)
                          }
                        return (
                            <div className = {showHideClassName}>
                                <div className="modal-container">

                                
                                    <form className="GetDescription">
                                        <div >
                                            <textarea
                                                type="text"
                                                value={this.state.description}
                                                name="description"
                                                onChange={e => this.handleChange(e)}
                                                className="form-control"
                                                placeholder="Enter your way to cook!"
                                                style={{height: '200px'}}
                                            />     
                                        </div>
                                
                                        <Button variant="contained"
                                        color="primary"
                                        className='modal-close'
                                        onClick={e => {
                                            updatePostClicked({variables: {
                                                id: this.state.post_id,
                                                description: this.state.description, 
                                                byUsername: this.state.byUsername
                                            }
                                            });
                                            this.setState({show:false})
                                            }}
                                        >
                                            Update
                                        </Button>
                                        <Button variant="contained"
                                        color="secondary"
                                        className='modal-close'
                                        onClick=
                                            {this.props.handleClose}
                                        >
                                            Cancel
                                            </Button>
                                        
                                    </form>
                                </div>
                            </div>
                        )
                    }
                }
            </Mutation>
        )
    }
}

export default UpdatePost;