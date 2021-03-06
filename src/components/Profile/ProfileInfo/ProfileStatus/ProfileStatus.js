import React from 'react';

import s from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            status: this.props.status
        }
        this.enableEditMode = this.enableEditMode.bind(this);
        this.disableEditMode = this.disableEditMode.bind(this);
        this.onStatusChange = this.onStatusChange.bind(this);
    }

    enableEditMode () {
        this.setState({
            editMode: true
        })
    }

    onStatusChange (e) {
        this.setState({
            status: e.currentTarget.value
        })
    }

    disableEditMode() {
        this.setState({
                editMode: false
            }
        )
        debugger;
        this.props.updateStatus(this.state.status);
        debugger;
    }


    //if status was gotten after render profile with default status
    componentDidUpdate(prevProps, prevState) {
        debugger;
        if(this.props.status !== prevProps.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render () {
        return (
            <div className={s.status__wrapper}>
                {
                    this.state.editMode &&
                    <div className={s.input__wrapper} onBlur={this.disableEditMode}>
                        <input onChange={this.onStatusChange} autoFocus={true} className={s.input} value={this.state.status}/>
                    </div>
                }
                {
                    !this.state.editMode &&
                    <span className={s.status} onDoubleClick={this.enableEditMode} data-tip='double click to change'>
                        {this.props.status || 'No status'}
                    </span>
                }
            </div>
        )
    }
}

export default ProfileStatus;