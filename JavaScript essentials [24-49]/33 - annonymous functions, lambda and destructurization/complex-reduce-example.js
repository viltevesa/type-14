console.group('7. Suskaičiuokite visų butų bendrą plotus sugrupuotus pagal miestą');
{
  function roomAreaReducer(prevTotalArea, room) {
    return prevTotalArea + room.area;
  }

  function flatAreaReducer(cityAreaObj, flat) {
    const flatArea = flat.rooms.reduce(roomAreaReducer, 0);
    if (flat.city in cityAreaObj) {
      // papildymas
      cityAreaObj[flat.city] += flatArea
    } else {
      // priskyrimas
      cityAreaObj[flat.city] = flatArea
    }

    return cityAreaObj;
  }

  const allFlatsArea = flats.reduce(flatAreaReducer, {});
  console.log(allFlatsArea);
}
console.groupEnd();
