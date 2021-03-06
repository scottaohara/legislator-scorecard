// ========================================================
//  need to figure out how to do these types of functional tests automatically
// ========================================================

function parseLegislatorList (chamber) {
  return [...document.querySelectorAll('table tbody tr')]
  .map((r) => {
    const legName = chamber === 'house' ? 'Representative' : 'Senator'
    const name = r.querySelector(`td[data-label=${legName}] b`).innerText
    const party = r.querySelector('td[data-label="Party"]').innerText
    let rating = r.querySelector('td[data-label="Progressive Rating"]').innerText.trim()
    return name + '  ' + party + '  ' + rating
  })
  .join('\n')
}

const house = `Arciero, James  D  78%  progressive
Ashe, Brian M.  D  70%  progressive
Atkins, Cory  D  83%  progressive
Ayers, Bruce J.  D  70%  progressive
Balser, Ruth B.  D  87%  progressive
Barber, Christine P.  D  91%  progressive
Barrows, F. Jay  R  13%  progressive
Benson, Jennifer E.  D  78%  progressive
Berthiaume, Donald R.  R  13%  progressive
Boldyga, Nicholas A.  R  17%  progressive
Brodeur, Paul  D  78%  progressive
Cabral, Antonio F. D.  D  78%  progressive
Cahill, Daniel  D  N/A:  no voting data from 189th sess.
Calter, Thomas J.  D  65%  progressive
Campanale, Kate D.  R  26%  progressive
Campbell, Linda Dean  D  74%  progressive
Cantwell, James M.  D  78%  progressive
Cariddi, Gailanne M.  D  57%  progressive
*some votes missing for 189th sess.
Carvalho, Evandro C.  D  83%  progressive
Cassidy, Gerard  D  N/A:  voted less than 50% of 189th sess.
Chan, Tackey  D  78%  progressive
Collins, Nick  D  78%  progressive
Connolly, Mike  D  N/A:  no voting data from 189th sess.
Coppinger, Edward F.  D  61%  progressive
*some votes missing for 189th sess.
Crighton, Brendan P.  D  78%  progressive
Crocker, William  R  N/A:  no voting data from 189th sess.
Cronin, Claire D.  D  78%  progressive
Cullinane, Daniel  D  83%  progressive
Cusack, Mark J.  D  70%  progressive
Cutler, Josh S.  D  74%  progressive
D'Emilia, Angelo L.  R  26%  progressive
Day, Michael S.  D  78%  progressive
Decker, Marjorie C.  D  87%  progressive
DeCoste, David F.  R  13%  progressive
DeLeo, Robert A.  D  78%  progressive
Dempsey, Brian S.  D  78%  progressive
Diehl, Geoff  R  13%  progressive
DiZoglio, Diana  D  78%  progressive
Donahue, Daniel M.  D  78%  progressive
Donato, Paul J.  D  70%  progressive
Dooley, Shawn  R  26%  progressive
Driscoll, William  D  N/A:  no voting data from 189th sess.
DuBois, Michelle M.  D  83%  progressive
Durant, Peter J.  R  22%  progressive
Dwyer, James J.  D  39%  progressive
Dykema, Carolyn C.  D  83%  progressive
Ehrlich, Lori A.  D  78%  progressive
Farley-Bouvier, Tricia  D  91%  progressive
Ferguson, Kimberly N.  R  26%  progressive
Fernandes, Dylan  D  N/A:  no voting data from 189th sess.
Ferrante, Ann-Margaret  D  74%  progressive
Finn, Michael J.  D  61%  progressive
Fiola, Carole A.  D  65%  progressive
Frost, Paul K.  R  22%  progressive
Galvin, William C.  D  70%  progressive
Garballey, Sean  D  87%  progressive
Garlick, Denise C.  D  74%  progressive
Garry, Colleen M.  D  30%  progressive
Gentile, Carmine L.  D  91%  progressive
Gifford, Susan Williams  R  17%  progressive
Golden, Thomas A.  D  70%  progressive
Goldstein-Rose, Solomon  D  N/A:  no voting data from 189th sess.
Gonzalez, Carlos  D  78%  progressive
Gordon, Kenneth I.  D  74%  progressive
Gregoire, Danielle W.  D  74%  progressive
Haddad, Patricia A.  D  78%  progressive
Harrington, Sheila C.  R  26%  progressive
Hay, Stephan  D  N/A:  voted less than 50% of 189th sess.
Hecht, Jonathan  D  100%  progressive
Heroux, Paul R.  D  74%  progressive
Higgins, Natalie  D  N/A:  no voting data from 189th sess.
Hill, Bradford R.  R  22%  progressive
Hogan, Kate  D  78%  progressive
Holmes, Russell E.  D  74%  progressive
Honan, Kevin G.  D  78%  progressive
Howitt, Steven S.  R  22%  progressive
Hunt, Daniel J.  D  78%  progressive
Hunt, Randy  R  26%  progressive
Jones, Bradley H.  R  13%  progressive
Kafka, Louis L.  D  61%  progressive
*some votes missing for 189th sess.
Kane, Hannah  R  29%  progressive
Kaufman, Jay R.  D  87%  progressive
Keefe, Mary S.  D  87%  progressive
Kelcourse, James M.  R  35%  progressive
Khan, Kay  D  74%  progressive
Kocot, Peter V.  D  83%  progressive
Koczera, Robert M.  D  74%  progressive
Kulik, Stephen  D  78%  progressive
Kuros, Kevin J.  R  13%  progressive
Lawn, John J.  D  78%  progressive
Lewis, Jack  D  N/A:  no voting data from 189th sess.
Linsky, David Paul  D  78%  progressive
Livingstone, Jay D.  D  83%  progressive
Lombardo, Marc T.  R  13%  progressive
Lyons, James J.  R  9%  progressive
Madaro, Adrian  D  76%  progressive
*some votes missing for 189th sess.
Mahoney, John J.  D  78%  progressive
Malia, Elizabeth A.  D  91%  progressive
Mariano, Ronald  D  74%  progressive
Mark, Paul W.  D  74%  progressive
Markey, Christopher M.  D  70%  progressive
Matias, Juana  D  N/A:  no voting data from 189th sess.
McGonagle, Joseph W.  D  74%  progressive
McKenna, Joseph D.  R  13%  progressive
McMurtry, Paul  D  78%  progressive
Meschino, Joan  D  N/A:  no voting data from 189th sess.
Miceli, James R.  D  61%  progressive
Michlewitz, Aaron  D  78%  progressive
Mirra, Leonard  R  17%  progressive
Mom, Rady  D  74%  progressive
Moran, Frank A.  D  83%  progressive
Moran, Michael J.  D  78%  progressive
Muradian, David K.  R  26%  progressive
Muratore, Mathew  R  17%  progressive
Murphy, James M.  D  70%  progressive
Murray, Brian  D  N/A:  no voting data from 189th sess.
Nangle, David M.  D  61%  progressive
Naughton, Harold P.  D  48%  progressive
*some votes missing for 189th sess.
O'Connell, Shaunna L.  R  17%  progressive
O'Day, James J.  D  78%  progressive
Orrall, Keiko M.  R  22%  progressive
Parisella, Jerald A.  D  57%  progressive
*some votes missing for 189th sess.
Peake, Sarah K.  D  78%  progressive
Peisch, Alice Hanlon  D  78%  progressive
Petrolati, Thomas M.  D  65%  progressive
Poirier, Elizabeth A.  R  22%  progressive
Provost, Denise  D  96%  progressive
Puppolo, Angelo J.  D  61%  progressive
Rogers, David M.  D  83%  progressive
Rogers, John H.  D  70%  progressive
Roy, Jeffrey N.  D  74%  progressive
Rushing, Byron  D  87%  progressive
Ryan, Daniel J.  D  78%  progressive
Sánchez, Jeffrey  D  83%  progressive
Scaccia, Angelo M.  D  65%  progressive
Schmid, Paul A.  D  78%  progressive
Scibak, John W.  D  78%  progressive
Silvia, Alan  D  70%  progressive
Smizik, Frank I.  D  91%  progressive
Smola, Todd M.  R  26%  progressive
Speliotis, Theodore C.  D  78%  progressive
Stanley, Thomas M.  D  70%  progressive
Straus, William M.  D  70%  progressive
Tosado, Jose F.  D  83%  progressive
Tucker, Paul  D  74%  progressive
Tyler, Chynah  D  N/A:  no voting data from 189th sess.
Ultrino, Steven  D  78%  progressive
Vega, Aaron  D  87%  progressive
Velis, John C.  D  57%  progressive
Vieira, David T.  R  35%  progressive
Vincent, RoseLee  D  78%  progressive
Wagner, Joseph F.  D  78%  progressive
Walsh, Chris  D  74%  progressive
Walsh, Thomas P.  D  N/A:  voted less than 50% of 189th sess.
Whelan, Timothy R.  R  26%  progressive
Whipps, Susannah M.  R  30%  progressive
Williams, Bud  D  N/A:  no voting data from 189th sess.
Wong, Donald H.  R  22%  progressive
Zlotnik, Jonathan D.  D  52%  progressive`

const senate = `Barrett, Michael J.  D  87%  progressive
Boncore, Joseph A.  D  89%  progressive
*some votes missing for 189th sess.
Brady, Michael D.  D  85%  progressive
*some votes missing for 189th sess.
Brownsberger, William N.  D  79%  progressive
Chandler, Harriette L.  D  84%  progressive
Chang-Diaz, Sonia  D  89%  progressive
Creem, Cynthia Stone  D  87%  progressive
Cyr, Julian  D  N/A:  no voting data from 189th sess.
deMacedo, Viriato Manuel  R  16%  progressive
DiDomenico, Sal N.  D  82%  progressive
Donnelly, Kenneth J.  D  92%  progressive
Donoghue, Eileen M.  D  66%  progressive
Eldridge, James B.  D  100%  progressive
Fattman, Ryan C.  R  11%  progressive
Flanagan, Jennifer L.  D  47%  progressive
Forry, Linda Dorcena  D  82%  progressive
Gobi, Anne M.  D  58%  progressive
Hinds, Adam G.  D  N/A:  no voting data from 189th sess.
Humason, Donald F.  R  8%  progressive
Ives, Kathleen O'Connor  D  74%  progressive
Jehlen, Patricia D.  D  95%  progressive
Keenan, John F.  D  82%  progressive
L'Italien, Barbara A.  D  84%  progressive
Lesser, Eric P.  D  82%  progressive
Lewis, Jason M.  D  84%  progressive
Lovely, Joan B.  D  74%  progressive
McGee, Thomas M.  D  82%  progressive
Montigny, Mark C.  D  87%  progressive
Moore, Michael O.  D  42%  progressive
O'Connor, Patrick M.  R  21%  progressive
*some votes missing for 189th sess.
Pacheco, Marc R.  D  76%  progressive
Rodrigues, Michael J.  D  66%  progressive
Rosenberg, Stanley C.  D  N/A:  voted less than 50% of 189th sess.
Ross, Richard J.  R  24%  progressive
Rush, Michael F.  D  47%  progressive
Spilka, Karen E.  D  84%  progressive
Tarr, Bruce E.  R  11%  progressive
Timilty, James E.  D  39%  progressive
Timilty, Walter F.  D  N/A:  no voting data from 189th sess.
Welch, James T.  D  76%  progressive`
