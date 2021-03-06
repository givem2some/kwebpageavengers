/**
 * Created by JongWoo on 2017-02-28.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

var Gallery_thumb = React.createClass({
    render: function(){
        return (
            <div className="gallery_sajin col-lg-3 col-md-3 col-sm-4 col-xs-6">
                <Link href="javascript:void(0);" className="thumbnail-pic">
                    <div className="sajin_image">
                        <img src={this.props.content['url']} alt="wrong" className="img img-responsive full-width"/>
                    </div>
                </Link>
            </div>
        );
    }
});


export default Gallery_thumb;