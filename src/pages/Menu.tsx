import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem,IonIcon, IonLabel} from '@ionic/react';
import { mailOutline } from 'ionicons/icons';

export const Menu = () => {
    return (
      <IonMenu side="start" menuId="menu" contentId="conteudo">
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Start Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>                    
            <IonItem>        
            <IonIcon icon={mailOutline} slot="start"></IonIcon>    
            <IonLabel>Inbox</IonLabel>
            </IonItem>
            <IonItem>Menu Item</IonItem>
            <IonItem>Menu Item</IonItem>
            <IonItem>Menu Item</IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
    );
  };