import { tagFor } from '../data'

export default function BookingRow({ b, short }) {
  const [ticket, guest, avatar, safari, date, guests, payment, total, status] = b
  return (
    <tr data-st={status}>
      <td className="mono">{ticket}</td>
      <td>
        <div className="who">
          <img src={avatar} alt="" />
          <div>
            <b>{guest}</b>
            <span>{payment}</span>
          </div>
        </div>
      </td>
      <td>{safari}</td>
      {!short && <td>{date}</td>}
      <td className="mono">{guests}</td>
      {!short && <td>{payment}</td>}
      <td className="mono">{total}</td>
      <td>
        <span className={`tag ${tagFor(status)}`}>{status}</span>
      </td>
    </tr>
  )
}
