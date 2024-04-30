namespace NewsApp;

public partial class MainPage : ContentPage
{    List<News> NewsList = new List<News>() {
        new News(){Name="Apple", ImageName="apple.png", Sentence="Did you taste my those apple cookies? This is the Best Cookies"},
        new News(){Name="Apricot", ImageName="apricot.png", Sentence="Did you taste my those apple cookies? Th is is the Best Cookies"},
        new News(){Name="Banana", ImageName="banana.png", Sentence="Did you taste my those apple cookies? This is the Best Cookies"},
        new News(){Name="coconut", ImageName="coconut.png", Sentence="Did you taste my those apple cookies? This is the Best Cookies"},
        new News(){Name="grape", ImageName="grape.png", Sentence="Did you taste my those apple cookies? This is the Best Cookies"},
        new News(){Name="guava", ImageName="guava.png", Sentence="Did you taste my those apple cookies? This is the Best Cookies"},
        new News(){Name="Kiwi", ImageName="kiwi.png", Sentence="Did you taste my those apple cookies? This is the Best Cookies"},
        new News(){Name="Mango", ImageName="mango.png", Sentence="Did you taste my those apple cookies? This is the Best Cookies"},
        new News(){Name="Pineapple", ImageName="pineapple.png", Sentence="Did you taste my those apple cookies? This is the Best Cookies"},
        new News(){Name="Watermelon", ImageName="watermelon.png", Sentence="Did you taste my those apple cookies? This is the Best Cookies"},
        new News(){Name="Pomegranate", ImageName="pomegranate.png", Sentence="Did you taste my those apple cookies? This is the Best Cookies"},
    };

	public MainPage()
	{
		InitializeComponent();
        LvFruits.ItemsSource = NewsList;
	}

    private void LvFruits_SelectionChanged(object sender, SelectionChangedEventArgs e) {
       var select =  e.CurrentSelection.FirstOrDefault() as News;
        if (select == null) return;
        Navigation.PushModalAsync(new NewsDetails(select));
        ((ListView)sender).SelectedItem = null;

    }
    //private void LvFruits_ItemSelected(object sender, SelectedItemChangedEventArgs e) {
    //    var SelectedItem = e.SelectedItem as Fruit;
    //    if (SelectedItem == null) return;
    //    Navigation.PushModalAsync(new FruitDetails(SelectedItem));
    //    ((ListView)sender).SelectedItem = null;

    //}
}

