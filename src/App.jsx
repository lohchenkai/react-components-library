import './App.css'
import Badge from './components/Badge/Badge'
import Banner from './components/Banner/Banner'
import Card from './components/Card/Card'
import Testimonial from './components/Testimonial/Testimonial'

function App() {

  return (
    <>
      <div className="section">
        <Badge shape="pill" color="gray">Gray</Badge>
        <Badge shape="pill" color="red">Red</Badge>
        <Badge shape="pill" color="yellow">Yellow</Badge>
        <Badge shape="pill" color="green">Green</Badge>
        <Badge shape="pill" color="blue">Blue</Badge>
        <Badge shape="pill" color="indigo">Indigo</Badge>
        <Badge shape="pill" color="purple">Purple</Badge>
        <Badge shape="pill" color="pink">Pink</Badge>
      </div>

      <div className="section flex-col">
        <Banner variant="success" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, ad.</Banner>
        <Banner variant="warning" >Lorem ipsum dolor sit amet.</Banner>
        <Banner variant="error" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero consequuntur laborum inventore consectetur pariatur autem, non doloribus, maxime debitis vero corporis unde aperiam! Alias praesentium hic officiis obcaecati quas perferendis.
        Laboriosam quibusdam repellendus officiis praesentium, sapiente magni rerum architecto molestiae dolores placeat accusamus at obcaecati aut vero mollitia laborum, sit veritatis. Reiciendis, dolorum repellat! Quo itaque perspiciatis atque incidunt ut.</Banner>
        <Banner variant="neutral" >Lorem ipsum dolor sit amet.</Banner>
      </div>

      <div className="section">
        <Card title="RIZZZZ">
          Lorem ipsum dolor sit amet.
        </Card>
        <Card title="RIZZZZ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, veniam.
        </Card>
      </div>

      <div className="section mt-3 flex-col">
        <Testimonial imageSource="https://picsum.photos/500" company="Workcation" job="CTO" name="May Anderson">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure ratione nobis voluptatibus alias, corporis adipisci ipsa sit consequuntur laborum animi laudantium maiores esse doloribus voluptas. Fugiat ratione alias in autem.
        </Testimonial>
        
        <Testimonial company="Workcation" job="CTO" name="May Anderson">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure ratione nobis voluptatibus alias, corporis adipisci ipsa sit consequuntur laborum animi laudantium maiores esse doloribus voluptas. Fugiat ratione alias in autem. 
        </Testimonial>
      </div>
    </>
  )
}

export default App
