import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function LeagueTable({data}) {
console.log(data.tournaments[0])
    return (
    <div>
        League Table
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell><h2>Club</h2></TableCell>
                    <TableCell align="center">Pts</TableCell>
                    <TableCell align="center">P</TableCell>
                    <TableCell align="center">W</TableCell>
                    <TableCell align="center">L</TableCell>
                    <TableCell align="center">D</TableCell>
                    <TableCell align="center">GF</TableCell>
                    <TableCell align="center">GA</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {(data.tournaments[0].clubTournaments).map((row) => (
                    <TableRow
                    key={row.club.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        <div >
                            {/*<img src={"https://footium.club/beta/api/nfts/clubs/" + row.club.id + "/image.svg"} alt=""></img>*/}
                            {row.club.name}
                        </div>
                    </TableCell>
                    <TableCell align="center">{row.clubStats.points}</TableCell>
                    <TableCell align="center">{row.clubStats.games}</TableCell>
                    <TableCell align="center">{row.clubStats.wins}</TableCell>
                    <TableCell align="center">{row.clubStats.losses}</TableCell>
                    <TableCell align="center">{row.clubStats.draws}</TableCell>
                    <TableCell align="center">{row.clubStats.goals}</TableCell>
                    <TableCell align="center">{row.clubStats.goalsAgainst}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
    )
}

export default LeagueTable;