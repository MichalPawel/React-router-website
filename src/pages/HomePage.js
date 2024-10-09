import React from 'react';
import Article from '../components/Article'

const articles = [{
    id: 1,
    title: 'Title',
    author: "John Doe",
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, sint. Aspernatur quo sunt vel ut dignissimos accusantium nisi vero cupiditate repudiandae et amet magnam eos, cumque reiciendis quis, ipsam numquam. Accusamus repudiandae iusto laborum labore fugit harum dolor illo rem, quibusdam officiis debitis tempora cupiditate laboriosam, aliquam magnam suscipit accusantium laudantium quasi distinctio, natus corporis nulla odit? Saepe fugiat recusandae, quos, dolor, exercitationem reprehenderit quis ipsum corporis quod aliquid facilis harum. Blanditiis nulla saepe et? Modi ut necessitatibus quas unde corporis tenetur, accusamus sint maxime porro fugiat nihil animi vero nostrum tempore numquam obcaecati possimus? Quia obcaecati ducimus modi cum dignissimos illo ratione! Maiores dolores quos officiis porro rem enim, repudiandae aut modi placeat quibusdam perferendis magnam? Doloremque in quidem tempora, ipsa illo id numquam! Blanditiis vitae voluptatem optio sint, id sunt officiis temporibus eum error molestias ad nulla beatae laborum omnis, minus assumenda necessitatibus ullam pariatur, quisquam doloremque quo. Repellendus reiciendis quos voluptas quae fugit praesentium saepe, ut unde, delectus atque nostrum. Id quam suscipit, et debitis sint necessitatibus magni nesciunt eveniet eos distinctio consequuntur. Autem nemo blanditiis consequatur cupiditate pariatur illo repellendus aut incidunt, maxime praesentium doloribus, perspiciatis voluptates. Quibusdam, rerum doloribus blanditiis totam laborum quam veniam sed quasi porro! Voluptatibus quia laborum ipsam cum sequi'
}
]

const artList = articles.map(article => (
    <Article key={article.id} {...article} />
))

const HomePage = () => {
    return (
        <div className='home'>
            {artList}
        </div>);
}

export default HomePage;