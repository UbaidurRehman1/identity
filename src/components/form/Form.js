import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import SelectInput from 'components/inputs/Select';
import Check from 'components/inputs/Check';
import FormTextField from 'components/inputs/FormTextField';

const useStyles = makeStyles((theme) => ({
    root: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        marginTop: theme.spacing(5),
        '& > *': {
            margin: theme.spacing(1),
            width: '80%',
        },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        textAlign: 'left'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


const Form = ({form, handler, formType}) => {
    const classes = useStyles();

    const fields = Object.keys(form).filter(key => key !== 'isCompleted')
        .map(key => {
            form[key]['id'] = key
            return form[key];
        });

    return (
        <form className={classes.root}>
            {
                fields.map(field => {
                    switch (field.type) {
                        case 'text':
                            return <FormTextField key={field.id} type={'text'} field={field} formType={formType} handler={handler}/>
                        case 'number':
                            return <FormTextField key={field.id} type={'number'} field={field} formType={formType} handler={handler}/>
                        case 'select':
                            return <SelectInput key={field.id} handler={handler} formType={formType} field={field}/>
                        case 'check':
                            return <Check key={field.id} handler={handler} formType={formType} field={field}/>
                        default:
                            return null;
                    }
                })
            }
        </form>
    );
}
export default Form;

Form.propTypes = {
    form: PropTypes.object,
    handler: PropTypes.func,
    formType: PropTypes.object
}
