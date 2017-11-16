import React, {Component} from 'react';
import {composeTheme} from "../helpers";
import PropTypes from 'prop-types';
import {autobind} from 'core-decorators';

@autobind
class FileUpload extends Component {
    state = {
        path: "",
        fileType: "",
        fileSize: "",
        file: "",
        fileBytes: null,
    };

    static Props = {
        name: PropTypes.string,
        fileType: PropTypes.string,
        requirePath: PropTypes.bool
    };

    isImgFile(typefile){
        let bol = (typefile.indexOf("jpeg") || typefile.indexOf("jpg") || typefile.indexOf("png"));
        return bol>-1;
    }

    handleDelete(e){
        const { name, change } = this.props;
        this.setState({path: "", file: "", fileType: "", fileBytes: "" });
        change(name, "");
    }

    handleChange(e) {
        const {name, change, fileType} = this.props;

        e.preventDefault();

        const fileDetail = e.target.files;

        if (!fileDetail.length) {
            return;
        }

        let status = this.isImgFile(fileDetail[0].type);

        if(  (!status && fileType=="image") || (status && fileType=="file") ){
            console.log("类型要求不符");
            return
        }

        this.setState({path: e.target.value,
            file: window.URL.createObjectURL(fileDetail[0]),
            fileType: fileDetail[0].type,
            fileBytes: fileDetail[0]});
        change(name, fileDetail[0]);
    }

    render() {
        const {t, fileType, requirePath} = this.props;
        return (
            <div className="file-block">
                <div className="file-left-con">
                    {
                        fileType == "image" && this.state.file ?
                            (
                                <div className="file-img">
                                    <img width={"100%"} height={"100%"} src={this.state.file} alt=""/>
                                    <span className="file-actions">
                                        <span className="file--dele" onClick={this.handleDelete} >
                                            {this.props.children}
                                        </span>
                                    </span>
                                </div>
                            ):
                            (
                                <div className="file-box">
                                    <div className="file-inner-icon">
                                        <i className="fa fa-cloud-upload fa-6 file-upload" aria-hidden="true"></i>
                                    </div>
                                    <div className="file-box-content">
                                        <input type="file"
                                               className="file-input"
                                               id="inputFile"
                                               onChange={this.handleChange}/>
                                    </div>
                                </div>
                            )
                    }

                </div>
                {
                    requirePath ? (
                        <div className="file-left-con file-path">
                            <div >
                                {this.state.path}
                            </div>
                        </div>
                    ): null
                }

            </div>
        )
    }
}

export default composeTheme(FileUpload);
