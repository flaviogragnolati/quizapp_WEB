import React from 'react';
import ComboFilter from './ComboFilter';
import CountryFilter from './CountryFilter';

function SchoolFilterDetail() {
  return (
    <>
      <ComboFilter
        label="School Name"
        placeholder="School Name"
        options={fakeSchools}
      />
      <br></br>
      <CountryFilter label="Country" placeholder="Country" />
    </>
  );
}

export default SchoolFilterDetail;

const fakeSchools = [
  { label: 'Universidad de Buenos Aires' },
  { label: 'Universidad de la Plata' },
  { label: 'Universidad Tecnologica Nacional' },
  { label: 'Instituto Tecnologico Bs As' },
  { label: 'Colegio 1' },
  { label: 'Colegio 2' },
  { label: 'Colegio 3' },
  { label: 'Colegio 4' },
  { label: 'Colegio 5' },
  { label: 'Colegio 6' },
  { label: 'Colegio 7' },
  { label: 'Colegio 9' },
  { label: 'Escuela 1 ' },
  { label: 'Escuela 2 ' },
  { label: 'Escuela 3 ' },
  { label: 'Escuela 4 ' },
];
