import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppError } from '@utils/errors/AppError';
import { PLAYER_COLLECTION } from '@storage/storageConfig';
import { PlayerStorageDTO } from './PlayerStorageDTO';
import { playersGetByGroup } from './playersGetByGroup';

export async function playerAddByGroup(
  newPlayer: PlayerStorageDTO,
  group: string
) {
  try {
    const storedPlayers = await playersGetByGroup(group);
    const playerAlreadyExists = storedPlayers.filter(
      (player) => player.name === newPlayer.name
    );
    if (playerAlreadyExists.length > 0) {
      throw new AppError(`Jogador ${newPlayer.name} já existe em um time.`);
    }

    const storage = JSON.stringify([...storedPlayers, newPlayer]);

    /* 
    @ignite-teams:players-Rocket
    @ignite-teams:players-Galera do Disc 
    */
    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);
  } catch (error) {
    throw error;
  }
}
