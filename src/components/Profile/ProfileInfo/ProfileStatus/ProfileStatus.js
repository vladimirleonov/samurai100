import React from 'react';

import s from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
    debugger;
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
        this.props.updateStatus(this.state.status);
    }

    render () {
        console.log(this.state.status);
        console.log(this.props.status);
        return (
            <div className={s.status__wrapper}>
                {
                    this.state.editMode &&
                    <span className={s.input__wrapper} onBlur={this.disableEditMode}>
                        <input onChange={this.onStatusChange} autoFocus={true} className={s.input} value={this.state.status}/>
                    </span>
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