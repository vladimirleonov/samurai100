import React from 'react';

import s from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false
        }
        this.enableEditMode = this.enableEditMode.bind(this);
        this.disableEditMode = this.disableEditMode.bind(this);
    }

    enableEditMode () {
        this.setState({
            editMode: true
        })
    }

    disableEditMode() {
        this.setState({
                editMode: false
            }
        )
    }

    render () {
        return (
            <div className={s.status__wrapper}>
                {
                    this.state.editMode &&
                    <span className={s.input__wrapper} onBlur={this.disableEditMode}>
                        <input autoFocus={true} className={s.input} value={'Weqwe sdfqwq sde ddfsdfsd fdsd ewrwer weeerrtytre'}/>
                    </span>
                }
                {
                    !this.state.editMode &&
                    <span className={s.status} onDoubleClick={this.enableEditMode}>
                        Weqwe sdfqwq sde ddfsdfsd fdsd ewrwer weeerrtytre
                    </span>
                }


            </div>
        )
    }
}

export default ProfileStatus;