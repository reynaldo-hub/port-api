import AuthService from '../../services/auth';
import AuthController from './controller';

export default function(service) {
    if(service)
        return new AuthController(service);

    return new AuthController(new AuthService());
}