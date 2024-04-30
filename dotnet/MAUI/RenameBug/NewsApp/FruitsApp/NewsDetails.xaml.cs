namespace NewsApp;

public partial class NewsDetails : ContentPage
{
	public NewsDetails(News fruit)
	{
		InitializeComponent();
        ImgFruit.Source = fruit.ImageName;
        fruitName.Text = fruit.Name;
        fruitSen.Text = fruit.Sentence;
	}

    private void Back_Tapped(object sender, EventArgs e) {
        Navigation.PopModalAsync();
    }
}