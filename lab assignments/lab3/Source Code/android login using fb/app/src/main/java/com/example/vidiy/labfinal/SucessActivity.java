package com.example.vidiy.labfinal;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.TextView;

public class SucessActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate( savedInstanceState );
        setContentView( R.layout.activity_sucess );
        TextView lblName = findViewById(R.id.txtname);
        String username = getIntent().getStringExtra("username");
       // String Gender =getIntent().getStringExtra("gen");
        lblName.setText(  username);

    }
    public void navigate(View view)
    {
        Intent redirect = new Intent(this,MainActivity.class);
        startActivity(redirect);
    }
}
