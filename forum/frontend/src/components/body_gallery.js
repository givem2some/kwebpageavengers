import React from 'react';
import { Link } from 'react-router';
import Gallery_Previews from './body_gallery_previews';
import GalleryDetail from './body_gallery_detail';
import GallerySelect from './body_gallery_select';
import { connect } from 'react-redux';

var BodyGallery = React.createClass ({
    render: function () {
        var categoryData = [{name:"뒷풀이",num:12},
            {name:"테스트",num:1},
            {name:"Wallpaper",num:2},
            {name:"스터디",num:3},
            {name:"일상",num:4},
            {name:"2009겨울MT",num:7},
            {name:"회의",num:3},
            {name:"2010봄MT",num:2},
            {name:"그냥",num:2},
            {name:"먹는거",num:3},
            {name:"여행",num:1},
            {name:"야유회",num:6},
            {name:"2011겨울MT",num:53},
            {name:"2011봄MT",num:23},
            {name:"2012겨울MT",num:21},
            {name:"2012봄MT",num:11},
            {name:"종강총회",num:5},
            {name:"2013겨울MT",num:8},
            {name:"2013여름MT",num:2},
            {name:"2013년고학번MT",num:5},
            {name:"2014년 KWEB봄소풍",num:24},
            {name:"2014년 화합의날",num:21}];

        return(
            <div id="body_gallery" className="container">
                <div className="body_gallery_main row">
                    {/* 왼쪽 사이드 바*/}
                        <div id="body_gallery_category" className="sidebar col-sm-3">
                            <ul className="list-group">
                                <li className="postreport list-group-item"><Link href="#">Total</Link></li>
                            </ul>
                            <ul className="list-group">
                                {categoryData.map((category, i) => {
                                    return(
                                        <li className="postreport list-group-item">
                                            <Link href="#">{category.name}</Link><span className="badge">{category.num}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    {/* 메인 내용
                        1. 메인에선 사진들만 보이게
                        2. 사진누르면 그 사진에 대한 포스팅
                     */}
                     
                     <GallerySelect STATE={this.props.STATE} />
                    {/* 1 . <Gallery_Previews /> */}
                    {/* 2 . <GalleryDetail /> */}

                </div>
            </div>
        );
    }
});

let mapStateToProps = (state) => {
  return{
    STATE: state.GalleryState.value
  };
}

BodyGallery=connect(mapStateToProps)(BodyGallery);

export default BodyGallery;