import React from 'react';
import { formatStateToOptions } from 'utils/helpers';
import ComboFilter from './ComboFilter';
import CountryFilter from './CountryFilter';
import { useSelector } from 'react-redux';
import { schoolsSelector } from 'utils/selectors';

function SchoolFilterDetail({ setFilter, values , clear}) {
  const schools = useSelector(schoolsSelector);
  const schoolOptions = formatStateToOptions(schools);
  // const getFilterValues = (values) => {
  //   setFilter((oldValues) => {
  //     return { ...oldValues, school: values };
  //   });
  // };

  return (
    <>
      <ComboFilter
        label="Nombre de la Escuela"
        placeholder="School Name"
        options={schoolOptions || [{ id: '', label: 'NO DATA' }]}
        // action={getFilterValues}
        values={values}
        clear={clear}
        setFilter={setFilter}
        name="school"
      />
      <br></br>
      <CountryFilter clear={clear} label="Pais" placeholder="Country" />
    </>
  );
}

export default SchoolFilterDetail;

// const fakeSchools = [
//   { label: 'Universidad de Buenos Aires' },
//   { label: 'Universidad de la Plata' },
//   { label: 'Universidad Tecnologica Nacional' },
//   { label: 'Instituto Tecnologico Bs As' },
//   { label: 'Colegio 1' },
//   { label: 'Colegio 2' },
//   { label: 'Colegio 3' },
//   { label: 'Colegio 4' },
//   { label: 'Colegio 5' },
//   { label: 'Colegio 6' },
//   { label: 'Colegio 7' },
//   { label: 'Colegio 9' },
//   { label: 'Escuela 1 ' },
//   { label: 'Escuela 2 ' },
//   { label: 'Escuela 3 ' },
//   { label: 'Escuela 4 ' },
// ];
