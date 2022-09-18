import './styles/main.css';
import { useState, useEffect } from 'react';
import logoImg from './assets/logo-nlw-esports.svg'
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import * as Dialog from '@radix-ui/react-dialog'
import { GameController } from 'phosphor-react';



interface Games{
  id: string,
  title:string,
  bannerUrl:string,
  _count:{
    ads:number,
  }
}

function App() {
  const [games, setGames] = useState<Games[]>([])

  useEffect(() =>{
    fetch('http://localhost:3333/games')
      .then(response => response.json())
      .then(data =>{
        setGames(data)
    })
  }, [])

  return(
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> esta aqui.
      </h1>



      <div className='grid grid-cols-6 gap-6 mt-16'>
        {games.map(game =>{
          return(
            <GameBanner
            key={game.id}
            bannerUrl={game.bannerUrl}
            title ={game.title}
            adsCount ={game._count.ads}
            />
          )
        })}
         
      </div>
      <Dialog.Root>
        <CreateAdBanner/>

        <Dialog.Portal>
          <Dialog.Overlay className='bg-black/60 inset-0 fixed'/>

          <Dialog.DialogContent className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480] shadow-lg shadow-black/25'>
            <Dialog.Title className='text-3xl text-white font-black'>Publique um anuncio</Dialog.Title>
                <form className="mt-8">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="game" className='font-semibold'>Qual seu nome?</label>
                    <Input t/>
                  </div>
                  <div>
                    <label htmlFor='name'> Seu nome (ou nickname)</label>
                    <input id="name" placeholder="Como te chama dentro do game?"></input>
                  </div>
                  <div>

                    <div>
                    <label htmlFor='yearsPlaying'> Joga há quanto temnpo</label>
                    <input id="yearsPlaying" placeholder="Tudo bem ser zero?"></input>
                    </div>
                    <div>
                    <label htmlFor='discord'> Qual seu Discord?</label>
                    <input id="discord" placeholder="Usuario#0000?"></input>
                    </div>
                  </div>

                  <div>
                    <div>
                    <label htmlFor="weekDays">Quando costuma jogar?</label>
                    </div>
                    <div>
                      <label htmlFor="hourStart">Quando horário do dia?</label>
                      <div>
                        <input id="hourStart" type ="time" placeholder='De'/>
                        <input id="hourEnd" type ="time" placeholder='Até'/>
                      </div>
                    </div>
                  </div>

                <div>
                  <input type="checkbox" />
                  Costumome conectar ao chat de voz 
                </div>

                <footer>
                  <button>Cancelar</button>
                  <button type='submit'>
                    <GameController/>
                  </button>
                </footer>
                </form>
            <Dialog.Content>

              <form action=""></form>
            </Dialog.Content>
          </Dialog.DialogContent>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}
 export default App