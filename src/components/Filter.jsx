import { useState } from "react";
import { useMovieStore } from "../store/useMovieApi";

const Filter = () => {
  const [selectedYear, setSelectedYear] = useState('')
  const fetchMovieByYear = useMovieStore((state) => state.fetchMovieByYear);
  const fetchLatestMovies = useMovieStore((state) => state.fetchLatestMovies);




    const handleYearChange = (e)=>{
      const year = e.target.value;
      setSelectedYear(year);

      if(year === ''){
        fetchLatestMovies()
      }else{
        fetchMovieByYear(year);
      }
    }

    return (
        <>
            <main>
                <select value={selectedYear} onChange={handleYearChange}>
                    <option value="">year</option>
                    <option value="2026">2026</option>
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                    <option value="2009">2009</option>
                </select>

                {/* <select name="" id="">
                  <option value="banana">b</option>
                  <option value="apple">a</option>
                  <option value="orange">o</option>
                </select> */}
            </main>
        </>
    );
};

export default Filter;
