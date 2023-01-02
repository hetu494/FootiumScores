import { gql } from '@apollo/client';

export const GET_FIXTURES = gql`
    query getClubs {
        clubs {
            id
            name
            clubTournaments{
            tournament{
                id
                name
            }
            }
        }
    }
`;

export const GET_FIXTURES_RESULTS = gql`
query FixturesResult2{
    fixtures(where: {AND: [{roundIndex: {equals: 6}}, {OR: [{state: {equals: "RESULT"}}, {state: {equals: "LIVE"}}]} ]} orderBy: {tournamentId:asc}) {
      state
      matchId
      roundIndex
      tournament{
        id
        name
      }
      match{
        homeClub
        awayClub
      }
    }
  }
`;


export const GET_FIXTURES_PAST_RESULTS = gql `
query FixturesResultsByTournamentId($divisonValue: Int){
  fixtures(where: {AND: [{tournamentId: {equals: $divisonValue}}, {state: {equals: "RESULT"}}]}, orderBy: {date: desc}) {
    state
    id
    date
    realWorldTimestamp
    roundIndex
    matchId
    tournament {
      name
      id
    }
    clubFixtures {
      isHome
      club {
        id
        name
      }
    }
    match {
      homeClub
      awayClub
    }
  }
}
`

export const GET_LIVE_FIXTURES = gql `
query LiveFixtures{
  fixtures(where: {state: {equals: "LIVE"}}, orderBy: {roundIndex: desc}) {
    state
    id
    date
    realWorldTimestamp
    roundIndex
    matchId
    tournament {
      name
      id
    }
    clubFixtures {
      isHome
      club {
        id
        name
      }
    }
    match {
      homeClub
      awayClub
    }
  }
}
`

export const GET_UPCOMING_FIXTURES = gql `
query UpcomingFixture($divisonValue: Int){
  fixtures(where: {AND: [{tournamentId: {equals: $divisonValue}}, {state: {equals: "BEFORE_KICKOFF"}},  ]} orderBy: {realWorldTimestamp: asc}) {
    state
    matchId
    roundIndex
    date
    realWorldTimestamp
    tournamentId
    clubFixtures{
      club{
        id
        name
      }
      isHome
    }
  }
}
`

export const GET_LEAGUE_TABLE = gql `
query Tournaments($divisonValue: Int!) {
  tournaments(
    where: {
      clubTournaments: { some: { tournamentId: { equals: $divisonValue } } }
    }
  ) {
    clubTournaments(orderBy: { position: asc }) {
      tournamentId
      position
      club {
        id
        name
      }
      clubStats {
        points
        games
        wins
        draws
        losses
        goals
        goalsAgainst
      }
    }
    competition {
      name
    }
  }
}
`