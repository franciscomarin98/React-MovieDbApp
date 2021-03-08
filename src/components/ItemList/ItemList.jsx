import { List, Avatar, Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { baseImgUrl } from './../../utils/movieDb';

const ItemList = ({movie}) => {
    const { id, title, poster_path } = movie;
    const urlPoster = `${baseImgUrl}${poster_path}`;

    return (
        <List.Item className="movie-list__movie">
            <List.Item.Meta avatar={<Avatar src={urlPoster} />}
                            title={<Link to={`/movie-detail/${id}`}>
                                    {title}
                                    </Link>}
            />
            <Link to={`/movie-detail/${id}`}>
                <Button type="primary"
                        icon={<RightOutlined />} />
            </Link> 
        </List.Item>
    )
}

export default ItemList
