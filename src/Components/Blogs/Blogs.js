import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div>
            <div className='question-div'>
                <h4>Whats is Context API?</h4>
                <p>Answer : Context API is a structure of REACT which helps to transfer data from one component to another component.This data transfers without using any props.We can transfer function,array,object,value,eventhandler and so on with Context API.It is also the alternative of prop drilling from grandparent to child.It is easier then prop drilling. </p>
            </div>
            <div className='question-div'>
                <h4>Whats is semantic tag?</h4>
                <p>Answer : The tag is a semantic tag, which gives the text it wraps around the role  of a top level heading on your page.Almost every tag is semantic.By adding semantic tags in document, it provides additional information about that document.Here are some semantic tags : article tag,header tag,footer tag,main tag etc. </p>
            </div>
        </div>
    );
};

export default Blogs;