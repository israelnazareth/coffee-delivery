import { Link } from 'react-router-dom'
import * as Icon from '@phosphor-icons/react'

export default function EmptyCart() {
  return (
    <div className="empty-cart">
      <Icon.Coffee size={64} weight="duotone" />
      <span>Ops... nenhum café selecionado! :’)</span>
      <hr style={{ margin: '1rem 0' }} />
      <Link to="/">
        <button>SELECIONAR CAFÉS</button>
      </Link>
    </div>
  )
}
