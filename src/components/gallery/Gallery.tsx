import { HamsterItem } from '../../types/HamsterItem'

interface Props {
	items: HamsterItem []
}

const Gallery = ({ items }: Props) => (
	<div>
		<h1> Välkommen till galleriet!</h1>

		{ items.length === 0 ? 'Det finns inga hamstrar.' :'TODO: mappa alla items' }

		<div>
			Bild på hamster <br/>
			Namn på hamster <br/>
			<button>Mer info!</button>

		</div>
	</div>
)

export default Gallery