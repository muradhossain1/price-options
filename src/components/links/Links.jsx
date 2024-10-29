import PropTypes from 'prop-types'; 

const Links = ({route}) => {
    return (
        <div>
            <li className='mr-10 hover:bg-yellow-300 px-6'>
                <a href={route.path}>{route.name}</a>
            </li>
        </div>
    );
};
Links.propTypes ={
    route : PropTypes.object
}
export default Links;