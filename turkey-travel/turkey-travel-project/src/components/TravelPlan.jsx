import { travelPlans } from '../data/travelData';

export default function TravelPlan({ city, mood }) {
  const plan = travelPlans[city][mood];

  return (
    <div>
      <h2>{city} Travel Plan ({mood})</h2>
      <p><strong>Food:</strong> {plan.food}</p>
      <p><strong>Visit:</strong> {plan.place}</p>
      <iframe src={plan.music} width="300" height="80" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media;" />
      <a href={plan.map} target="_blank" rel="noreferrer">Open Map</a>
    </div>
  );
}