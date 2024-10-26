
const Link = ({route}) => {
    return (
        <div className="mr-10 text">
            <li><a href={route.path} >{route.name}</a></li>
        </div>
    );
};

export default Link;