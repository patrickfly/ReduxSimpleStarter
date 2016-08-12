import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {createPost} from '../actions/index';
import {Link} from 'react-router';

class PostNew extends Component{
    //context doesn't have to be deliberately passed down to child component
    static contextTypes = {
        router: PropTypes.object
    };

    onSubmit(props){
        this.props.createPost(props)
        .then(() =>{
            this.context.router.push('/');

        });
    }

    render(){
        const {fields:{title, categories, content}, handleSubmit} = this.props;
        //console.log(title);

        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h3>Create A New Post</h3>
                <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
                    <label>Title</label>
                    <input type="text" className="form-control" {...title}/>
                    <div className="text-help">
                        {title.touched ? title.error : ''}
                    </div>
                </div>
                <div className="form-group">
                    <label>Categories</label>
                    <input type="text" className="form-control" {...categories}/>
                    <div className="text-help">
                        {categories.touched ? categories.error: ''}
                    </div>
                </div>
                <div className={`form-group ${content.touched && content.invalid ? 'had-danger' : ''}`} >
                    <label>Content</label>
                    <textarea className="form-control" {...content}/>
                     <div className="text-help">
                        {content.touched ? content.error: ''}
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Back</Link>
            </form>
        );
    }
}

function validate(values){
    const errors = {};

    if(!values.title){
        errors.title = 'Enter a username';
    }

    return errors;
}

//1st argument is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
    form:'PostsNewForm', //表单名称
    fields: ['title', 'categories', 'content'], //tells reduxForm the fields
    validate
}, null, {createPost})(PostNew);

//当用户在表单中输入时，输入内容将被保存在application state中
// state === {
//     form:{
//         PostsNewForm:{
//             title:'...',
//             categories:'...',
//             content: '...'
//         }
//     }
// }
