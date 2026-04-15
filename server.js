import {express} from '@express'
import {db_base}  from './config/base'

app.use();
app.middleware();


router.get('https//:user/services'){
    let v_intd = {};
    let response = {};
    let v_response = module.loaded(db_base,req_info,v_intd,response);
    return  v_response;
};

