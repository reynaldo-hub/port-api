import user from '../../store/models/user';
import AuthService from './service';

export default function(model) {
    if(model)
        return new AuthService(model);

    return new AuthService(new user());
}